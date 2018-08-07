"use strict";
const Constants = require ("../../../Constants");
const GriffinSentinelBase = require("../setM14/GriffinSentinel");

class GriffinSentinel extends GriffinSentinelBase {
  constructor (game) {
    super(game, "Griffin Sentinel", "Magic 2010", "M10");
  }
}

module.exports = GriffinSentinel;
