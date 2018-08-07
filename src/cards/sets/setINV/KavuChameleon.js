"use strict";
const Constants = require ("../../../Constants");
const KavuChameleonBase = require("../setWC01/KavuChameleon");

class KavuChameleon extends KavuChameleonBase {
  constructor (game) {
    super(game, "Kavu Chameleon", "Invasion", "INV");
  }
}

module.exports = KavuChameleon;
