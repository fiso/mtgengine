"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimReminder extends UnimplementedCard {
  constructor(game) {
    super(game, "Grim Reminder", "Mirrodin", "MRD");
  }
}

module.exports = GrimReminder;
