"use strict";
const Constants = require ("../../../Constants");
const MikokoroCenteroftheSeaBase = require("../setA25/MikokoroCenteroftheSea");

class MikokoroCenteroftheSea extends MikokoroCenteroftheSeaBase {
  constructor (game) {
    super(game, "Mikokoro, Center of the Sea", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MikokoroCenteroftheSea;
