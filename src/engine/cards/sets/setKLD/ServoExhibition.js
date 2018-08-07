"use strict";
const Constants = require ("../../../Constants");
const ServoExhibitionBase = require("../setF17/ServoExhibition");

class ServoExhibition extends ServoExhibitionBase {
  constructor (game) {
    super(game, "Servo Exhibition", "Kaladesh", "KLD");
  }
}

module.exports = ServoExhibition;
