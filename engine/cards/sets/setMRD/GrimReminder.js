"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrimReminder extends Card {
  constructor(game) {
    super(game, "Grim Reminder", "Mirrodin", "MRD");
  }
}

module.exports = GrimReminder;
