"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuestforRenewal extends Card {
  constructor(game) {
    super(game, "Quest for Renewal", "Worldwake", "WWK");
  }
}

module.exports = QuestforRenewal;
