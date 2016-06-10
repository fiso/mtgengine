"use strict";
const Constants = require ("../../../Constants");
const MightofOaksBase = require("../set8ED/MightofOaks");

class MightofOaks extends MightofOaksBase {
  constructor (game) {
    super(game, "Might of Oaks", "Urza's Legacy", "ULG");
  }
}

module.exports = MightofOaks;
