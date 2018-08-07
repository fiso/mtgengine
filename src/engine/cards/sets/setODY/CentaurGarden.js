"use strict";
const Constants = require ("../../../Constants");
const CentaurGardenBase = require("../setWC03/CentaurGarden");

class CentaurGarden extends CentaurGardenBase {
  constructor (game) {
    super(game, "Centaur Garden", "Odyssey", "ODY");
  }
}

module.exports = CentaurGarden;
