"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FledglingGriffin extends UnimplementedCard {
  constructor(game) {
    super(game, "Fledgling Griffin", "Worldwake", "WWK");
  }
}

module.exports = FledglingGriffin;
