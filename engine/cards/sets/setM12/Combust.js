"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CombustBase = require("../setM11/Combust.js");

class Combust extends CombustBase {
  constructor(game) {
    super(game, "Combust", "Magic 2012", "M12");
  }
}

module.exports = Combust;
