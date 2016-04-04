"use strict";
const Constants = require ("../../../Constants");
const PhantasmalDragonBase = require("../setDDM/PhantasmalDragon");

class PhantasmalDragon extends PhantasmalDragonBase {
  constructor(game) {
    super(game, "Phantasmal Dragon", "Magic 2012", "M12");
  }
}

module.exports = PhantasmalDragon;
