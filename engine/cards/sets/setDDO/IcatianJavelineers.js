"use strict";
const Constants = require ("../../../Constants");
const IcatianJavelineersBase = require("../setATH/IcatianJavelineers");

class IcatianJavelineers extends IcatianJavelineersBase {
  constructor(game) {
    super(game, "Icatian Javelineers", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = IcatianJavelineers;
