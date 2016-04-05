"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YoseitheMorningStar extends UnimplementedCard {
  constructor(game) {
    super(game, "Yosei, the Morning Star", "Champions of Kamigawa", "CHK");
  }
}

module.exports = YoseitheMorningStar;
