"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JudgeUnworthy extends UnimplementedCard {
  constructor(game) {
    super(game, "Judge Unworthy", "Future Sight", "FUT");
  }
}

module.exports = JudgeUnworthy;
