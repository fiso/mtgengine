"use strict";
const Constants = require ("../../../Constants");
const JadeStatueBase = require("../set9ED/JadeStatue");

class JadeStatue extends JadeStatueBase {
  constructor (game) {
    super(game, "Jade Statue", "Limited Edition Alpha", "LEA");
  }
}

module.exports = JadeStatue;
