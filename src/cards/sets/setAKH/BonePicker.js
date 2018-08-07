"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BonePicker extends UnimplementedCard {
  constructor (game) {
    super(game, "Bone Picker", "Amonkhet", "AKH");
  }
}

module.exports = BonePicker;
