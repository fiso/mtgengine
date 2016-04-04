"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AshmouthHoundBase = require("../setDDK/AshmouthHound.js");

class AshmouthHound extends AshmouthHoundBase {
  constructor(game) {
    super(game, "Ashmouth Hound", "Innistrad", "ISD");
  }
}

module.exports = AshmouthHound;
