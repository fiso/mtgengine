"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AppealAuthority extends UnimplementedCard {
  constructor (game) {
    super(game, "Appeal // Authority", "Hour of Devastation", "HOU");
  }
}

module.exports = AppealAuthority;
