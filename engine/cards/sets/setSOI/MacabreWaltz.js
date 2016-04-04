"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MacabreWaltzBase = require("../setDIS/MacabreWaltz.js");

class MacabreWaltz extends MacabreWaltzBase {
  constructor(game) {
    super(game, "Macabre Waltz", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MacabreWaltz;
