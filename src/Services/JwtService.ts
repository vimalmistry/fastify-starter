import { createSigner, createVerifier } from "fast-jwt";

export default class JwtService {
   /**
    * Signer
    */
   private signWithPromise = createSigner({
      key: process.env.TOKEN_SECRET || "localtoken",
      algorithm: "HS256",
   });

   /**
    * Verifier
    */
   private verifyWithPromise = createVerifier({
      key: process.env.TOKEN_SECRET || "localtoken",
      cache: true,
      // maxAge: 10000,//7.2e+6 //milliseconds
      // maxAge: 60000 * 1,// -> 1 min
      maxAge: 60000 * 60 * 12, //7.2e+6 //milliseconds -> 12 hours
      cacheTTL: 600000, //default 10min => miliseconds
   });

   //
   parseToken(string: string): string {
      try {
         const arr = string?.split(" ");
         return arr[arr.length - 1].trim();
      } catch (e) {
         throw Error("Invalid Token");
         // return null;
      }
   }

   /**
    * Parse and Verify
    */
   async parseAndVerify(token: string | undefined) {
      if (typeof token == undefined) {
         throw Error("Invalid Token");
      }
      const parsed = this.parseToken(token!);
      return await this.verify(parsed);
   }

   /**
    * Verify Token
    */
   async verify(token: string): Promise<JSON> {
      const payload = await this.verifyWithPromise(token);
      //if there is userId in payload otherwise throw error
      if ("id" in payload) {
         return payload;
      }
      throw Error("Invalid Token");
   }

   /**
    * Sign new token
    * @param data
    * @returns
    */
   async sign(data: Record<string, unknown>): Promise<string> {
      return await this.signWithPromise(data);
   }
}
