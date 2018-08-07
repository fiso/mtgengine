"use strict";
const Constants = require ("../../../Constants");
const ArtificersEpiphanyBase = require("../setDDU/ArtificersEpiphany");

class ArtificersEpiphany extends ArtificersEpiphanyBase {
  constructor (game) {
    super(game, "Artificer's Epiphany", "Magic Origins", "ORI");
  }
}

module.exports = ArtificersEpiphany;
