"use strict";
const Constants = require ("../../../Constants");
const StampedingRhinoBase = require("../setM10/StampedingRhino");

class StampedingRhino extends StampedingRhinoBase {
  constructor (game) {
    super(game, "Stampeding Rhino", "Magic 2012", "M12");
  }
}

module.exports = StampedingRhino;
