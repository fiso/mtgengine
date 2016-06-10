"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MalakirBloodwitch extends UnimplementedCard {
  constructor (game) {
    super(game, "Malakir Bloodwitch", "Zendikar", "ZEN");
  }
}

module.exports = MalakirBloodwitch;
