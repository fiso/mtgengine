"use strict";
const Constants = require ("../../../Constants");
const HeadlessHorsemanBase = require("../setPRM/HeadlessHorseman");

class HeadlessHorseman extends HeadlessHorsemanBase {
  constructor (game) {
    super(game, "Headless Horseman", "Legends", "LEG");
  }
}

module.exports = HeadlessHorseman;
