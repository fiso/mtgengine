"use strict";
const Constants = require ("../../../Constants");
const ClashofWillsBase = require("../setF16/ClashofWills");

class ClashofWills extends ClashofWillsBase {
  constructor (game) {
    super(game, "Clash of Wills", "Magic Origins", "ORI");
  }
}

module.exports = ClashofWills;
