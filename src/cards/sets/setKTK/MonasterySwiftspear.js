"use strict";
const Constants = require ("../../../Constants");
const MonasterySwiftspearBase = require("../setIMA/MonasterySwiftspear");

class MonasterySwiftspear extends MonasterySwiftspearBase {
  constructor (game) {
    super(game, "Monastery Swiftspear", "Khans of Tarkir", "KTK");
  }
}

module.exports = MonasterySwiftspear;
