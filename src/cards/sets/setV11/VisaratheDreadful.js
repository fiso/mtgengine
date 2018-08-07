"use strict";
const Constants = require ("../../../Constants");
const VisaratheDreadfulBase = require("../setEMA/VisaratheDreadful");

class VisaratheDreadful extends VisaratheDreadfulBase {
  constructor (game) {
    super(game, "Visara the Dreadful", "From the Vault: Legends", "V11");
  }
}

module.exports = VisaratheDreadful;
