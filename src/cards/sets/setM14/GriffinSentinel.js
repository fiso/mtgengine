"use strict";
const Constants = require ("../../../Constants");
const GriffinSentinelBase = require("../setM10/GriffinSentinel");

class GriffinSentinel extends GriffinSentinelBase {
  constructor(game) {
    super(game, "Griffin Sentinel", "Magic 2014 Core Set", "M14");
  }
}

module.exports = GriffinSentinel;
