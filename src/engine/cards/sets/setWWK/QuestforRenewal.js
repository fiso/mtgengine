"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuestforRenewal extends UnimplementedCard {
  constructor (game) {
    super(game, "Quest for Renewal", "Worldwake", "WWK");
  }
}

module.exports = QuestforRenewal;
