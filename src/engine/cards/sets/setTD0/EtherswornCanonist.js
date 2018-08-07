"use strict";
const Constants = require ("../../../Constants");
const EtherswornCanonistBase = require("../setMMA/EtherswornCanonist");

class EtherswornCanonist extends EtherswornCanonistBase {
  constructor (game) {
    super(game, "Ethersworn Canonist", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = EtherswornCanonist;
