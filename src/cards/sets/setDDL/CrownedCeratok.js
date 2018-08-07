"use strict";
const Constants = require ("../../../Constants");
const CrownedCeratokBase = require("../setIMA/CrownedCeratok");

class CrownedCeratok extends CrownedCeratokBase {
  constructor (game) {
    super(game, "Crowned Ceratok", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = CrownedCeratok;
