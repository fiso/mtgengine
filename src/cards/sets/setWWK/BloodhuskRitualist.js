"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodhuskRitualist extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodhusk Ritualist", "Worldwake", "WWK");
  }
}

module.exports = BloodhuskRitualist;
