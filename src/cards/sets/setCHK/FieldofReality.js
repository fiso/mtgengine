"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FieldofReality extends UnimplementedCard {
  constructor(game) {
    super(game, "Field of Reality", "Champions of Kamigawa", "CHK");
  }
}

module.exports = FieldofReality;
