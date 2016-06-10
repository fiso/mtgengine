"use strict";
const Constants = require ("../../../Constants");
const JeditOjanenBase = require("../setLEG/JeditOjanen");

class JeditOjanen extends JeditOjanenBase {
  constructor (game) {
    super(game, "Jedit Ojanen", "Masters Edition III", "ME3");
  }
}

module.exports = JeditOjanen;
