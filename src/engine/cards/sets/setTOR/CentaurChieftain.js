"use strict";
const Constants = require ("../../../Constants");
const CentaurChieftainBase = require("../setEMA/CentaurChieftain");

class CentaurChieftain extends CentaurChieftainBase {
  constructor (game) {
    super(game, "Centaur Chieftain", "Torment", "TOR");
  }
}

module.exports = CentaurChieftain;
