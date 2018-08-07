"use strict";
const Constants = require ("../../../Constants");
const EmbermawHellionBase = require("../setPORI/EmbermawHellion");

class EmbermawHellion extends EmbermawHellionBase {
  constructor (game) {
    super(game, "Embermaw Hellion", "Magic Origins", "ORI");
  }
}

module.exports = EmbermawHellion;
