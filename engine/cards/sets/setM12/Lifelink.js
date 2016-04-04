"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LifelinkBase = require("../setM10/Lifelink.js");

class Lifelink extends LifelinkBase {
  constructor(game) {
    super(game, "Lifelink", "Magic 2012", "M12");
  }
}

module.exports = Lifelink;
