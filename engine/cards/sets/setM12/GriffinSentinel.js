"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GriffinSentinelBase = require("../setM10/GriffinSentinel.js");

class GriffinSentinel extends GriffinSentinelBase {
  constructor(game) {
    super(game, "Griffin Sentinel", "Magic 2012", "M12");
  }
}

module.exports = GriffinSentinel;
