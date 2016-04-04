"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReapWhatIsSown extends UnimplementedCard {
  constructor(game) {
    super(game, "Reap What Is Sown", "Born of the Gods", "BNG");
  }
}

module.exports = ReapWhatIsSown;
