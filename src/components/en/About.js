import React, { Component } from 'react';
import Header from '../home/Header';
import Contact from '../home/Contact';



class About extends Component {

  render(){
    return(
      
      <div>
          <Header />
          {/* // <!-- Latest paper Section !--> */}
          <div className="backimg w-100 d-inline-block mt-5" id="about">
            <section className="about w90  mt-5">
              <div className="row m-0">
                <div className="container text-left mt-4">
                  <div className="row h-100 m-0 paper">
                    <div className="col-12">
                    <div className="row">
                      <h3 className="text-center py-2 w-100">سياسة الاستخدام لموقع دافور</h3>
                      </div>
                      <p className="align-self-start expandBlock">
                        1-	خصص موقع دافور لمشاركة الملفات التي لها علاقة بالعملية التعليمية كالمذكرات و الملخصات و التعاميم و الكراسات و الأبحاث  و التحاضير و ما في حكمها مما يخدم الطلاب و الطالبات و هيئة التعليم  في جميع المراحل و أي مواد أو بيانات لا تدخل في هذا الاختصاص لا يسمح بتحميلها و يتحمل المستخدم المسؤولية الكاملة الناتجة عن نشرها, و لإدارة الموقع الحق في حذفها.</p>
                        <p className="align-self-start expandBlock">
                          2-	أتعهد بأن دخولي أو استخدامي لموقع دافور يخضع لأنظمة و قواعد السلوك المعمول بها في المملكة العربية السعودية و كذلك الموافقة دون قيد أو شرط على الامتناع عن تحميل أو نقل أي ملفات أو فيروسات تحتوي على برمجيات تكون أو يحتما أن تكون ضارة أو مواد أو بيانات أو معلومات تتضمن تشويهاً للسمعة أو انتهاكاً للقوانين أو مواد إباحية أو بذيئة أو مخالفة للآداب العامة أو تحوي تعدي على خصوصية الآخرين أو تعدي على حقوق النشر أو التسويق لمنتجات ممنوعة أو مشبوهة أو غير مرخصة من الجهات المختصة. أو معلومات غير قانونية أو تسبب ضرر للغير. و أتعهد بعد إساءة استخدام هذا الموقع أو أي من خدماته الالكترونية سواء بقصد أو بدون قصد و تجنب كل ما من شأنه أن يتسبب في أي نوع من المشاكل و أقر بالمسؤولية و الخضوع للسلطات السعودية فيما يتعلق بأي مطالبات أو مخالفات قد تنشأ عن استخدامي لهذا الموقع.</p>
                          <p className="align-self-start expandBlock">
                          3-	إن موقع دافور يحترم خصوصية معلومات العميل ولن يقوم إطلاقا ببيع المعلومات الخاصة بالعميل أو تسريبها إلى أي طرف آخر إلا بإذن مسبق منه أو لأغراض قانونية بحته.</p>
                          <p className="align-self-start expandBlock">
                          4-	المستخدم مسئول مسؤولية كاملة عن الحفاظ على خصوصية وسرية بيانات الحساب الخاص به , ويجب اخذ الحيطة والحذر في المعلومات التي يقوم بالكشف عنها لأي طرف آخر.</p>
                          <p className="align-self-start expandBlock">
                          5-	تخضع المواد و البيانات المراد تحميلها في موقع دافور للرقابة من قبل إدارة الموقع و هذا لا يعفي المستخدم من المسؤولية عن أي بيانات أو مواد قام بتحميلها حسب ما ورد في المادة 1  من سياسة الاستخدام.</p>
                          <p className="align-self-start expandBlock">
                          6-	يحق لإدارة موقع دافور إيقاف الحسابات المخالفة لسياسة الموقع او المخالفة لقوانين المملكة العربية السعودية بدون إنذار مسبق ولا يحق للجهة المالكة للحساب المخالف بالمطالبة باسترداد أي مبالغ ماليه مقابل خدمات الموقع.
                      </p>
                    </div>
                  </div>
                </div>     
              </div>
            </section>
           </div>
          <div className="clearfix"></div>
        <Contact />
    </div>

    );
}
}

export default About;
