"use strict";
const Constants = require ("../../../Constants");
const AkromaAngelofWrathBase = require("../setA25/AkromaAngelofWrath");

class AkromaAngelofWrath extends AkromaAngelofWrathBase {
  constructor (game) {
    super(game, "Akroma, Angel of Wrath", "From the Vault: Angels", "V15");
  }
}

module.exports = AkromaAngelofWrath;
