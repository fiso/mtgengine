"use strict";
const Constants = require ("../../../Constants");
const KuroPitlordBase = require("../setDVD/KuroPitlord");

class KuroPitlord extends KuroPitlordBase {
  constructor (game) {
    super(game, "Kuro, Pitlord", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KuroPitlord;
