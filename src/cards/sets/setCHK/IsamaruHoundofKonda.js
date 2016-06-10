"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IsamaruHoundofKonda extends UnimplementedCard {
  constructor (game) {
    super(game, "Isamaru, Hound of Konda", "Champions of Kamigawa", "CHK");
  }
}

module.exports = IsamaruHoundofKonda;
