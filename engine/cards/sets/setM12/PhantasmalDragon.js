"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhantasmalDragonBase = require("../setDDM/PhantasmalDragon.js");

class PhantasmalDragon extends PhantasmalDragonBase {
  constructor(game) {
    super(game, "Phantasmal Dragon", "Magic 2012", "M12");
  }
}

module.exports = PhantasmalDragon;
