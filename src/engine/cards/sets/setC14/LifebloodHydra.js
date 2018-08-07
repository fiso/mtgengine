"use strict";
const Constants = require ("../../../Constants");
const LifebloodHydraBase = require("../setCMA/LifebloodHydra");

class LifebloodHydra extends LifebloodHydraBase {
  constructor (game) {
    super(game, "Lifeblood Hydra", "Commander 2014", "C14");
  }
}

module.exports = LifebloodHydra;
