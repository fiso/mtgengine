'use strict';
const MTGObject = require('./MTGObject');
const Constants = require('../Constants');
const assert = require('assert');
const Cost = require('../Cost');

class Card extends MTGObject {
  constructor (game, cardName, setName, setCode) {
    super(game);
    if (new.target === Card) {
      throw new TypeError('Card is not to be used directly');
    }
    this._name = cardName;
    this._superTypes = [];
    this._types = [];
    this._subTypes = [];
    this._abilities = [];
    this._imageUrl = '';
    this._setName = setName;
    this._setCode = setCode;
    this._cost = undefined;

    this._promise = new Promise((resolve, reject) => {
      this._game._cardApi.getCard(cardName).then((card) => {
        assert(card.name === cardName);
        this._imageUrl = card.image_uris.normal;
        this._mapTypes(card);
        this._parseCost(card);

        resolve(this);
      });
    });
  }

  _parseCost (card) {
    this.cost = card.mana_cost;
  }

  _mapTypes (card) {
    const sections = card.type_line.split('—');
    assert(sections.length < 3);

    const words1 = sections[0].split(' ');
    this._superTypes = words1.map((word) =>
      Constants.cardSuperTypes[word.toUpperCase()]
    ).filter(Boolean);

    this._types = words1.map((word) =>
      Constants.cardTypes[word.toUpperCase()]
    ).filter(Boolean);

    if (sections.length > 1) {
      const words2 = sections[1].split(' ');
      this._subTypes = words2.map((word) =>
        word.toUpperCase()
      ).filter(Boolean);
    }
  }

  ready () {
    return this._promise;
  }

  sharesAnyTypesWith (otherCard) {
    for (const type of this._superTypes) {
      if (otherCard._superTypes.indexOf(type) !== -1) {
        return true;
      }
    }
    for (const type of this._types) {
      if (otherCard._types.indexOf(type) !== -1) {
        return true;
      }
    }
    for (const type of this._subTypes) {
      if (otherCard._subTypes.indexOf(type) !== -1) {
        return true;
      }
    }
    return false;
  }

  isBasicLand () {
    if (this._superTypes.indexOf(Constants.cardSuperTypes.BASIC) === -1) {
      return false;
    }
    if (this._types.indexOf(Constants.cardTypes.LAND) === -1) {
      return false;
    }
    return true;
  }

  hasType (type) {
    if (this._superTypes.indexOf(type) !== -1) {
      return true;
    }
    if (this._types.indexOf(type) !== -1) {
      return true;
    }
    if (this._subTypes.indexOf(type) !== -1) {
      return true;
    }
    return false;
  }

  resolve (controller, targets) {
    this._game.log('Card resolves');
  }

  get cost () {
    return this._cost;
  }

  set cost (costString) {
    this._costString = costString;
    this._cost = new Cost(this._costString);
  }

  placeInZone (zone) {
    this._zone = zone;
  }

  getCurrentZone () {
    return this._zone;
  }

  addAbility (cost, abilityCallback, isManaAbility) {
    this._abilities.push({
      cost: cost,
      abilityCallback: abilityCallback,
      isManaAbility: isManaAbility,
    });
  }
}

module.exports = Card;
