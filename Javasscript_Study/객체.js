// 객체 (object)
/*
객체는 속성(property)과 메서드(method)로 구성된 데이터 컨테이너이다.
객체는 중괄호({})로 정의하고, 속성과 메서드는 콜론(:)으로 구분한다.
속성과 메서드는 쉼표(,)로 구분한다.
*/

let codeit = {
  name: '홍길동',
  bornYear : 2025,
  'born Year' : 2000,
  isVeryNice : true,
  worstCourse : null,
  bestCourse : {
    title : '자바스크립트 프로그래밍 기초',
    language : 'JavaScript',
  }
};

// 점 표기법 (object.propertyName)
console.log(codeit.bornYear);

// 대괄호 표기법 (object['propertyName'])
console.log(codeit['born Year']);
console.log(codeit['born' + ' Year']);

let propertyName = 'name';
console.log(codeit[propertyName]);

// 객체 안에 객체 속성 접근
console.log(codeit.bestCourse.title);

// 존재하지 않은 속성에 접근하면 undefined
console.log(codeit.bestCourse.author);

// 객체 프로퍼티 수정
console.log('----- 객체 프로퍼티 수정 -----')
console.log(codeit.name);
codeit.name = '김길동';
console.log(codeit.name);

// 객체 프로퍼티 추가
console.log('----- 객체 프로퍼티 추가 -----')
console.log(codeit.ceo);
codeit.ceo = '김철수';
console.log(codeit.ceo);

console.log('----- 프로퍼티에 띄어쓰기 있을 경우 -----');
codeit['ceo name'] = '영희';
console.log(codeit['ceo name']);

// 객체 프로퍼티 삭제
console.log('----- 객체 프로퍼티 삭제 -----')
console.log(codeit.worstCourse);
delete codeit.worstCourse;
console.log(codeit.worstCourse);

// 객체 프로퍼티 존재 여부 확인
console.log('----- 객체 프로퍼티 존재 여부 확인 -----')
console.log(codeit.name !== undefined);

// 'Properties' in object
// 안전한 속성 접근 방법
console.log('name' in codeit);

console.log('----- if문에 적용 -----');
if ('name' in codeit) {
  console.log(`name 값은 ${codeit.name} 입니다.`);
} else {
  console.log('name 속성이 없습니다.');
}