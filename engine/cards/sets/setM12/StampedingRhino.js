"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StampedingRhinoBase = require("../setM10/StampedingRhino.js");

class StampedingRhino extends StampedingRhinoBase {
  constructor(game) {
    super(game, "Stampeding Rhino", "Magic 2012", "M12");
  }
}

module.exports = StampedingRhino;
