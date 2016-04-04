"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JeditOjanenBase = require("../setLEG/JeditOjanen.js");

class JeditOjanen extends JeditOjanenBase {
  constructor(game) {
    super(game, "Jedit Ojanen", "Masters Edition III", "ME3");
  }
}

module.exports = JeditOjanen;
