"use strict";
const Constants = require ("../../../Constants");
const MacabreWaltzBase = require("../setDIS/MacabreWaltz");

class MacabreWaltz extends MacabreWaltzBase {
  constructor (game) {
    super(game, "Macabre Waltz", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MacabreWaltz;
