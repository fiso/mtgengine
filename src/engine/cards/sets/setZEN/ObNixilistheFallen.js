"use strict";
const Constants = require ("../../../Constants");
const ObNixilistheFallenBase = require("../setIMA/ObNixilistheFallen");

class ObNixilistheFallen extends ObNixilistheFallenBase {
  constructor (game) {
    super(game, "Ob Nixilis, the Fallen", "Zendikar", "ZEN");
  }
}

module.exports = ObNixilistheFallen;
