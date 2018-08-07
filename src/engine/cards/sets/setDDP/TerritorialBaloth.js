"use strict";
const Constants = require ("../../../Constants");
const TerritorialBalothBase = require("../setBFZ/TerritorialBaloth");

class TerritorialBaloth extends TerritorialBalothBase {
  constructor (game) {
    super(game, "Territorial Baloth", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = TerritorialBaloth;
