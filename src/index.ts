/**
 * Module Resolution
 * Check tsconfig.json => basepath and paths section
 * Check package.json => _moduleAliases section
 * They have to be identical
 */
import "module-alias/register";

import Cluster from "@Bin/Cluster";
import runApp from "@Bin/App";

Cluster(runApp);
