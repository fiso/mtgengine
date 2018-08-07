"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DictationQuillograph extends UnimplementedCard {
  constructor (game) {
    super(game, "Dictation Quillograph", "Unstable", "UST");
  }
}

module.exports = DictationQuillograph;
