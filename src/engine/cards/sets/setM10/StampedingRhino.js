"use strict";
const Constants = require ("../../../Constants");
const StampedingRhinoBase = require("../setW17/StampedingRhino");

class StampedingRhino extends StampedingRhinoBase {
  constructor (game) {
    super(game, "Stampeding Rhino", "Magic 2010", "M10");
  }
}

module.exports = StampedingRhino;
